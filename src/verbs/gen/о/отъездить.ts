import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отъездить: PerfectVerb = {
  name: Word('отъездить', 3),
  singular1stPerson: Word('отъезжу', 3),
  singular2ndPerson: Word('отъездишь', 3),
  singular3rdPerson: Word('отъездит', 3),
  plural1stPerson: Word('отъездим', 3),
  plural2ndPerson: Word('отъездите', 3),
  plural3rdPerson: Word('отъездят', 3),
  masculinePast: Word('отъездил', 3),
  femininePast: Word('отъездила', 3),
  neuterPast: Word('отъездило', 3),
  pluralPast: Word('отъездили', 3),
  imperativeInformal: Word('отъезди', 3),
  imperativeFormal: Word('отъездите', 3),
  imperfect: [],
};

perfectVerbs.set(отъездить.name.text, отъездить);

export { отъездить };