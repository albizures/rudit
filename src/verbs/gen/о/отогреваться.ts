import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отогреваться: PerfectVerb = {
  name: Word('отогреваться', 7),
  singular1stPerson: Word('отогреваюсь', 7),
  singular2ndPerson: Word('отогреваешься', 7),
  singular3rdPerson: Word('отогревается', 7),
  plural1stPerson: Word('отогреваемся', 7),
  plural2ndPerson: Word('отогреваетесь', 7),
  plural3rdPerson: Word('отогреваются', 7),
  masculinePast: Word('отогревался', 7),
  femininePast: Word('отогревалась', 7),
  neuterPast: Word('отогревалось', 7),
  pluralPast: Word('отогревались', 7),
  imperativeInformal: Word('отогревайся', 7),
  imperativeFormal: Word('отогревайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(отогреваться.name.text, отогреваться);

export { отогреваться };