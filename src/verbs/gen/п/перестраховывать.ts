import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перестраховывать: PerfectVerb = {
  name: Word('перестраховывать', 9),
  singular1stPerson: Word('перестраховываю', 9),
  singular2ndPerson: Word('перестраховываешь', 9),
  singular3rdPerson: Word('перестраховывает', 9),
  plural1stPerson: Word('перестраховываем', 9),
  plural2ndPerson: Word('перестраховываете', 9),
  plural3rdPerson: Word('перестраховывают', 9),
  masculinePast: Word('перестраховывал', 9),
  femininePast: Word('перестраховывала', 9),
  neuterPast: Word('перестраховывало', 9),
  pluralPast: Word('перестраховывали', 9),
  imperativeInformal: Word('перестраховывай', 9),
  imperativeFormal: Word('перестраховывайте', 9),
  imperfect: [],
};

perfectVerbs.set(перестраховывать.name.text, перестраховывать);

export { перестраховывать };