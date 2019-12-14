import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const купоросить: PerfectVerb = {
  name: Word('купоросить', 5),
  singular1stPerson: Word('купорошу', 5),
  singular2ndPerson: Word('купоросишь', 5),
  singular3rdPerson: Word('купоросит', 5),
  plural1stPerson: Word('купоросим', 5),
  plural2ndPerson: Word('купоросите', 5),
  plural3rdPerson: Word('купоросят', 5),
  masculinePast: Word('купоросил', 5),
  femininePast: Word('купоросила', 5),
  neuterPast: Word('купоросило', 5),
  pluralPast: Word('купоросили', 5),
  imperativeInformal: Word('купорось', 5),
  imperativeFormal: Word('купоросьте', 5),
  imperfect: [],
};

perfectVerbs.set(купоросить.name.text, купоросить);

export { купоросить };