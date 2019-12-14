import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const притвориться: PerfectVerb = {
  name: Word('притвориться', 7),
  singular1stPerson: Word('притворюсь', 7),
  singular2ndPerson: Word('притворишься', 7),
  singular3rdPerson: Word('притворится', 7),
  plural1stPerson: Word('притворимся', 7),
  plural2ndPerson: Word('притворитесь', 7),
  plural3rdPerson: Word('притворятся', 7),
  masculinePast: Word('притворился', 7),
  femininePast: Word('притворилась', 7),
  neuterPast: Word('притворилось', 7),
  pluralPast: Word('притворились', 7),
  imperativeInformal: Word('притворись', 7),
  imperativeFormal: Word('притворитесь', 7),
  imperfect: ['притворяться'],
};

perfectVerbs.set(притвориться.name.text, притвориться);

export { притвориться };