import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const передувать: PerfectVerb = {
  name: Word('передувать', 7),
  singular1stPerson: Word('передуваю', 7),
  singular2ndPerson: Word('передуваешь', 7),
  singular3rdPerson: Word('передувает', 7),
  plural1stPerson: Word('передуваем', 7),
  plural2ndPerson: Word('передуваете', 7),
  plural3rdPerson: Word('передувают', 7),
  masculinePast: Word('передувал', 7),
  femininePast: Word('передувала', 7),
  neuterPast: Word('передувало', 7),
  pluralPast: Word('передували', 7),
  imperativeInformal: Word('передувай', 7),
  imperativeFormal: Word('передувайте', 7),
  imperfect: [],
};

perfectVerbs.set(передувать.name.text, передувать);

export { передувать };