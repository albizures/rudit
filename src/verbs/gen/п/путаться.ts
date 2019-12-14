import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const путаться: PerfectVerb = {
  name: Word('путаться', 1),
  singular1stPerson: Word('путаюсь', 1),
  singular2ndPerson: Word('путаешься', 1),
  singular3rdPerson: Word('путается', 1),
  plural1stPerson: Word('путаемся', 1),
  plural2ndPerson: Word('путаетесь', 1),
  plural3rdPerson: Word('путаются', 1),
  masculinePast: Word('путался', 1),
  femininePast: Word('путалась', 1),
  neuterPast: Word('путалось', 1),
  pluralPast: Word('путались', 1),
  imperativeInformal: Word('путайся', 1),
  imperativeFormal: Word('путайтесь', 1),
  imperfect: [],
};

perfectVerbs.set(путаться.name.text, путаться);

export { путаться };