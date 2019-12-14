import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скатывать: PerfectVerb = {
  name: Word('скатывать', 2),
  singular1stPerson: Word('скатываю', 2),
  singular2ndPerson: Word('скатываешь', 2),
  singular3rdPerson: Word('скатывает', 2),
  plural1stPerson: Word('скатываем', 2),
  plural2ndPerson: Word('скатываете', 2),
  plural3rdPerson: Word('скатывают', 2),
  masculinePast: Word('скатывал', 2),
  femininePast: Word('скатывала', 2),
  neuterPast: Word('скатывало', 2),
  pluralPast: Word('скатывали', 2),
  imperativeInformal: Word('скатывай', 2),
  imperativeFormal: Word('скатывайте', 2),
  imperfect: ['скатать','скатить'],
};

perfectVerbs.set(скатывать.name.text, скатывать);

export { скатывать };