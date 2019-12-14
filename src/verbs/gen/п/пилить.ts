import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пилить: PerfectVerb = {
  name: Word('пилить', 3),
  singular1stPerson: Word('пилю', 3),
  singular2ndPerson: Word('пилишь', 1),
  singular3rdPerson: Word('пилит', 1),
  plural1stPerson: Word('пилим', 1),
  plural2ndPerson: Word('пилите', 1),
  plural3rdPerson: Word('пилят', 1),
  masculinePast: Word('пилил', 3),
  femininePast: Word('пилила', 3),
  neuterPast: Word('пилило', 3),
  pluralPast: Word('пилили', 3),
  imperativeInformal: Word('пили', 3),
  imperativeFormal: Word('пилите', 3),
  imperfect: [],
};

perfectVerbs.set(пилить.name.text, пилить);

export { пилить };