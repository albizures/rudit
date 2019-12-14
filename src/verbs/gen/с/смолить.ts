import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const смолить: PerfectVerb = {
  name: Word('смолить', 4),
  singular1stPerson: Word('смолю', 4),
  singular2ndPerson: Word('смолишь', 4),
  singular3rdPerson: Word('смолит', 4),
  plural1stPerson: Word('смолим', 4),
  plural2ndPerson: Word('смолите', 4),
  plural3rdPerson: Word('смолят', 4),
  masculinePast: Word('смолил', 4),
  femininePast: Word('смолила', 4),
  neuterPast: Word('смолило', 4),
  pluralPast: Word('смолили', 4),
  imperativeInformal: Word('смоли', 4),
  imperativeFormal: Word('смолите', 4),
  imperfect: [],
};

perfectVerbs.set(смолить.name.text, смолить);

export { смолить };