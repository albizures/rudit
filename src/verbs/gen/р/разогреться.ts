import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разогреться: PerfectVerb = {
  name: Word('разогреться', 6),
  singular1stPerson: Word('разогреюсь', 6),
  singular2ndPerson: Word('разогреешься', 6),
  singular3rdPerson: Word('разогреется', 6),
  plural1stPerson: Word('разогреемся', 6),
  plural2ndPerson: Word('разогреетесь', 6),
  plural3rdPerson: Word('разогреются', 6),
  masculinePast: Word('разогрелся', 6),
  femininePast: Word('разогрелась', 6),
  neuterPast: Word('разогрелось', 6),
  pluralPast: Word('разогрелись', 6),
  imperativeInformal: Word('разогрейся', 6),
  imperativeFormal: Word('разогрейтесь', 6),
  imperfect: [],
};

perfectVerbs.set(разогреться.name.text, разогреться);

export { разогреться };