import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обогреться: PerfectVerb = {
  name: Word('обогреться', 5),
  singular1stPerson: Word('обогреюсь', 5),
  singular2ndPerson: Word('обогреешься', 5),
  singular3rdPerson: Word('обогреется', 5),
  plural1stPerson: Word('обогреемся', 5),
  plural2ndPerson: Word('обогреетесь', 5),
  plural3rdPerson: Word('обогреются', 5),
  masculinePast: Word('обогрелся', 5),
  femininePast: Word('обогрелась', 5),
  neuterPast: Word('обогрелось', 5),
  pluralPast: Word('обогрелись', 5),
  imperativeInformal: Word('обогрейся', 5),
  imperativeFormal: Word('обогрейтесь', 5),
  imperfect: [],
};

perfectVerbs.set(обогреться.name.text, обогреться);

export { обогреться };