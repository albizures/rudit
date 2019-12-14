import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обогреваться: PerfectVerb = {
  name: Word('обогреваться', 7),
  singular1stPerson: Word('обогреваюсь', 7),
  singular2ndPerson: Word('обогреваешься', 7),
  singular3rdPerson: Word('обогревается', 7),
  plural1stPerson: Word('обогреваемся', 7),
  plural2ndPerson: Word('обогреваетесь', 7),
  plural3rdPerson: Word('обогреваются', 7),
  masculinePast: Word('обогревался', 7),
  femininePast: Word('обогревалась', 7),
  neuterPast: Word('обогревалось', 7),
  pluralPast: Word('обогревались', 7),
  imperativeInformal: Word('обогревайся', 7),
  imperativeFormal: Word('обогревайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(обогреваться.name.text, обогреваться);

export { обогреваться };