import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перевернуть: PerfectVerb = {
  name: Word('перевернуть', 8),
  singular1stPerson: Word('переверну', 8),
  singular2ndPerson: Word('перевернешь', 1),
  singular3rdPerson: Word('перевернет', 1),
  plural1stPerson: Word('перевернем', 1),
  plural2ndPerson: Word('перевернете', 1),
  plural3rdPerson: Word('перевернут', 1),
  masculinePast: Word('перевернул', 8),
  femininePast: Word('перевернула', 8),
  neuterPast: Word('перевернуло', 8),
  pluralPast: Word('перевернули', 8),
  imperativeInformal: Word('переверни', 8),
  imperativeFormal: Word('переверните', 8),
  imperfect: ['перевёртывать','переворачивать'],
};

perfectVerbs.set(перевернуть.name.text, перевернуть);

export { перевернуть };