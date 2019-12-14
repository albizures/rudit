import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const описывать: PerfectVerb = {
  name: Word('описывать', 2),
  singular1stPerson: Word('описываю', 2),
  singular2ndPerson: Word('описываешь', 2),
  singular3rdPerson: Word('описывает', 2),
  plural1stPerson: Word('описываем', 2),
  plural2ndPerson: Word('описываете', 2),
  plural3rdPerson: Word('описывают', 2),
  masculinePast: Word('описывал', 2),
  femininePast: Word('описывала', 2),
  neuterPast: Word('описывало', 2),
  pluralPast: Word('описывали', 2),
  imperativeInformal: Word('описывай', 2),
  imperativeFormal: Word('описывайте', 2),
  imperfect: ['описать'],
};

perfectVerbs.set(описывать.name.text, описывать);

export { описывать };