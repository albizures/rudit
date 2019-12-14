import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изъездить: PerfectVerb = {
  name: Word('изъездить', 3),
  singular1stPerson: Word('изъезжу', 3),
  singular2ndPerson: Word('изъездишь', 3),
  singular3rdPerson: Word('изъездит', 3),
  plural1stPerson: Word('изъездим', 3),
  plural2ndPerson: Word('изъездите', 3),
  plural3rdPerson: Word('изъездят', 3),
  masculinePast: Word('изъездил', 3),
  femininePast: Word('изъездила', 3),
  neuterPast: Word('изъездило', 3),
  pluralPast: Word('изъездили', 3),
  imperativeInformal: Word('изъезди', 3),
  imperativeFormal: Word('изъездите', 3),
  imperfect: [],
};

perfectVerbs.set(изъездить.name.text, изъездить);

export { изъездить };