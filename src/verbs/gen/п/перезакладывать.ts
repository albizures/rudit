import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перезакладывать: PerfectVerb = {
  name: Word('перезакладывать', 8),
  singular1stPerson: Word('перезакладываю', 8),
  singular2ndPerson: Word('перезакладываешь', 8),
  singular3rdPerson: Word('перезакладывает', 8),
  plural1stPerson: Word('перезакладываем', 8),
  plural2ndPerson: Word('перезакладываете', 8),
  plural3rdPerson: Word('перезакладывают', 8),
  masculinePast: Word('перезакладывал', 8),
  femininePast: Word('перезакладывала', 8),
  neuterPast: Word('перезакладывало', 8),
  pluralPast: Word('перезакладывали', 8),
  imperativeInformal: Word('перезакладывай', 8),
  imperativeFormal: Word('перезакладывайте', 8),
  imperfect: [],
};

perfectVerbs.set(перезакладывать.name.text, перезакладывать);

export { перезакладывать };