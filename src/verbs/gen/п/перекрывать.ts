import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перекрывать: PerfectVerb = {
  name: Word('перекрывать', 8),
  singular1stPerson: Word('перекрываю', 8),
  singular2ndPerson: Word('перекрываешь', 8),
  singular3rdPerson: Word('перекрывает', 8),
  plural1stPerson: Word('перекрываем', 8),
  plural2ndPerson: Word('перекрываете', 8),
  plural3rdPerson: Word('перекрывают', 8),
  masculinePast: Word('перекрывал', 8),
  femininePast: Word('перекрывала', 8),
  neuterPast: Word('перекрывало', 8),
  pluralPast: Word('перекрывали', 8),
  imperativeInformal: Word('перекрывай', 8),
  imperativeFormal: Word('перекрывайте', 8),
  imperfect: [],
};

perfectVerbs.set(перекрывать.name.text, перекрывать);

export { перекрывать };