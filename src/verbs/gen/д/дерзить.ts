import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дерзить: PerfectVerb = {
  name: Word('дерзить', 4),
  singular1stPerson: Word('держу', 4),
  singular2ndPerson: Word('дерзишь', 4),
  singular3rdPerson: Word('дерзит', 4),
  plural1stPerson: Word('дерзим', 4),
  plural2ndPerson: Word('дерзите', 4),
  plural3rdPerson: Word('дерзят', 4),
  masculinePast: Word('дерзил', 4),
  femininePast: Word('дерзила', 4),
  neuterPast: Word('дерзило', 4),
  pluralPast: Word('дерзили', 4),
  imperativeInformal: Word('дерзи', 4),
  imperativeFormal: Word('дерзите', 4),
  imperfect: [],
};

perfectVerbs.set(дерзить.name.text, дерзить);

export { дерзить };