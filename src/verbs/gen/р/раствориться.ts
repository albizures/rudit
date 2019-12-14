import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раствориться: PerfectVerb = {
  name: Word('раствориться', 7),
  singular1stPerson: Word('растворюсь', 7),
  singular2ndPerson: Word('растворишься', 7),
  singular3rdPerson: Word('растворится', 7),
  plural1stPerson: Word('растворимся', 7),
  plural2ndPerson: Word('растворитесь', 7),
  plural3rdPerson: Word('растворятся', 7),
  masculinePast: Word('растворился', 7),
  femininePast: Word('растворилась', 7),
  neuterPast: Word('растворилось', 7),
  pluralPast: Word('растворились', 7),
  imperativeInformal: Word('растворись', 7),
  imperativeFormal: Word('растворитесь', 7),
  imperfect: [],
};

perfectVerbs.set(раствориться.name.text, раствориться);

export { раствориться };