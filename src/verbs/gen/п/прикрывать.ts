import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прикрывать: PerfectVerb = {
  name: Word('прикрывать', 7),
  singular1stPerson: Word('прикрываю', 7),
  singular2ndPerson: Word('прикрываешь', 7),
  singular3rdPerson: Word('прикрывает', 7),
  plural1stPerson: Word('прикрываем', 7),
  plural2ndPerson: Word('прикрываете', 7),
  plural3rdPerson: Word('прикрывают', 7),
  masculinePast: Word('прикрывал', 7),
  femininePast: Word('прикрывала', 7),
  neuterPast: Word('прикрывало', 7),
  pluralPast: Word('прикрывали', 7),
  imperativeInformal: Word('прикрывай', 7),
  imperativeFormal: Word('прикрывайте', 7),
  imperfect: ['прикрыть'],
};

perfectVerbs.set(прикрывать.name.text, прикрывать);

export { прикрывать };