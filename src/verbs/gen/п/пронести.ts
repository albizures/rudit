import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пронести: PerfectVerb = {
  name: Word('пронести', 7),
  singular1stPerson: Word('пронесу', 6),
  singular2ndPerson: Word('пронесёшь', 6),
  singular3rdPerson: Word('пронесёт', 6),
  plural1stPerson: Word('пронесём', 6),
  plural2ndPerson: Word('пронесёте', 6),
  plural3rdPerson: Word('пронесут', 6),
  masculinePast: Word('пронёс', 4),
  femininePast: Word('пронесла', 7),
  neuterPast: Word('пронесло', 7),
  pluralPast: Word('пронесли', 7),
  imperativeInformal: Word('пронеси', 6),
  imperativeFormal: Word('пронесите', 6),
  imperfect: [],
};

perfectVerbs.set(пронести.name.text, пронести);

export { пронести };