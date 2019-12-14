import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отпираться: PerfectVerb = {
  name: Word('отпираться', 5),
  singular1stPerson: Word('отпираюсь', 5),
  singular2ndPerson: Word('отпираешься', 5),
  singular3rdPerson: Word('отпирается', 5),
  plural1stPerson: Word('отпираемся', 5),
  plural2ndPerson: Word('отпираетесь', 5),
  plural3rdPerson: Word('отпираются', 5),
  masculinePast: Word('отпирался', 5),
  femininePast: Word('отпиралась', 5),
  neuterPast: Word('отпиралось', 5),
  pluralPast: Word('отпирались', 5),
  imperativeInformal: Word('отпирайся', 5),
  imperativeFormal: Word('отпирайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(отпираться.name.text, отпираться);

export { отпираться };