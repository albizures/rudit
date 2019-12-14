import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перегореть: PerfectVerb = {
  name: Word('перегореть', 7),
  singular1stPerson: Word('перегорю', 7),
  singular2ndPerson: Word('перегоришь', 7),
  singular3rdPerson: Word('перегорит', 7),
  plural1stPerson: Word('перегорим', 7),
  plural2ndPerson: Word('перегорите', 7),
  plural3rdPerson: Word('перегорят', 7),
  masculinePast: Word('перегорел', 7),
  femininePast: Word('перегорела', 7),
  neuterPast: Word('перегорело', 7),
  pluralPast: Word('перегорели', 7),
  imperativeInformal: Word('перегори', 7),
  imperativeFormal: Word('перегорите', 7),
  imperfect: [],
};

perfectVerbs.set(перегореть.name.text, перегореть);

export { перегореть };