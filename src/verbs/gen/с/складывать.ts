import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const складывать: PerfectVerb = {
  name: Word('складывать', 3),
  singular1stPerson: Word('складываю', 3),
  singular2ndPerson: Word('складываешь', 3),
  singular3rdPerson: Word('складывает', 3),
  plural1stPerson: Word('складываем', 3),
  plural2ndPerson: Word('складываете', 3),
  plural3rdPerson: Word('складывают', 3),
  masculinePast: Word('складывал', 3),
  femininePast: Word('складывала', 3),
  neuterPast: Word('складывало', 3),
  pluralPast: Word('складывали', 3),
  imperativeInformal: Word('складывай', 3),
  imperativeFormal: Word('складывайте', 3),
  imperfect: ['сложить'],
};

perfectVerbs.set(складывать.name.text, складывать);

export { складывать };