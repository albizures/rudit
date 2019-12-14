import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отходить: PerfectVerb = {
  name: Word('отходить', 5),
  singular1stPerson: Word('отхожу', 5),
  singular2ndPerson: Word('отходишь', 3),
  singular3rdPerson: Word('отходит', 3),
  plural1stPerson: Word('отходим', 3),
  plural2ndPerson: Word('отходите', 3),
  plural3rdPerson: Word('отходят', 3),
  masculinePast: Word('отходил', 5),
  femininePast: Word('отходила', 5),
  neuterPast: Word('отходило', 5),
  pluralPast: Word('отходили', 5),
  imperativeInformal: Word('отходи', 5),
  imperativeFormal: Word('отходите', 5),
  imperfect: ['отойти'],
};

perfectVerbs.set(отходить.name.text, отходить);

export { отходить };