import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const шушукаться: PerfectVerb = {
  name: Word('шушукаться', 3),
  singular1stPerson: Word('шушукаюсь', 3),
  singular2ndPerson: Word('шушукаешься', 3),
  singular3rdPerson: Word('шушукается', 3),
  plural1stPerson: Word('шушукаемся', 3),
  plural2ndPerson: Word('шушукаетесь', 3),
  plural3rdPerson: Word('шушукаются', 3),
  masculinePast: Word('шушукался', 3),
  femininePast: Word('шушукалась', 3),
  neuterPast: Word('шушукалось', 3),
  pluralPast: Word('шушукались', 3),
  imperativeInformal: Word('шушукайся', 3),
  imperativeFormal: Word('шушукайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(шушукаться.name.text, шушукаться);

export { шушукаться };