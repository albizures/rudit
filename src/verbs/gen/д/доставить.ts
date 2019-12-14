import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const доставить: PerfectVerb = {
  name: Word('доставить', 4),
  singular1stPerson: Word('доставлю', 4),
  singular2ndPerson: Word('доставишь', 4),
  singular3rdPerson: Word('доставит', 4),
  plural1stPerson: Word('доставим', 4),
  plural2ndPerson: Word('доставите', 4),
  plural3rdPerson: Word('доставят', 4),
  masculinePast: Word('доставил', 4),
  femininePast: Word('доставила', 4),
  neuterPast: Word('доставило', 4),
  pluralPast: Word('доставили', 4),
  imperativeInformal: Word('доставь', 4),
  imperativeFormal: Word('доставьте', 4),
  imperfect: ['доставлять'],
};

perfectVerbs.set(доставить.name.text, доставить);

export { доставить };