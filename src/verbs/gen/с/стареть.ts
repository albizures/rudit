import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стареть: PerfectVerb = {
  name: Word('стареть', 4),
  singular1stPerson: Word('старею', 4),
  singular2ndPerson: Word('стареешь', 4),
  singular3rdPerson: Word('стареет', 4),
  plural1stPerson: Word('стареем', 4),
  plural2ndPerson: Word('стареете', 4),
  plural3rdPerson: Word('стареют', 4),
  masculinePast: Word('старел', 4),
  femininePast: Word('старела', 4),
  neuterPast: Word('старело', 4),
  pluralPast: Word('старели', 4),
  imperativeInformal: Word('старей', 4),
  imperativeFormal: Word('старейте', 4),
  imperfect: ['постареть'],
};

perfectVerbs.set(стареть.name.text, стареть);

export { стареть };