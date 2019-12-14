import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мусолить: PerfectVerb = {
  name: Word('мусолить', 3),
  singular1stPerson: Word('мусолю', 3),
  singular2ndPerson: Word('мусолишь', 3),
  singular3rdPerson: Word('мусолит', 3),
  plural1stPerson: Word('мусолим', 3),
  plural2ndPerson: Word('мусолите', 3),
  plural3rdPerson: Word('мусолят', 3),
  masculinePast: Word('мусолил', 3),
  femininePast: Word('мусолила', 3),
  neuterPast: Word('мусолило', 3),
  pluralPast: Word('мусолили', 3),
  imperativeInformal: Word('мусоль', 3),
  imperativeFormal: Word('мусольте', 3),
  imperfect: [],
};

perfectVerbs.set(мусолить.name.text, мусолить);

export { мусолить };