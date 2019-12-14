import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замусолить: PerfectVerb = {
  name: Word('замусолить', 5),
  singular1stPerson: Word('замусолю', 5),
  singular2ndPerson: Word('замусолишь', 5),
  singular3rdPerson: Word('замусолит', 5),
  plural1stPerson: Word('замусолим', 5),
  plural2ndPerson: Word('замусолите', 5),
  plural3rdPerson: Word('замусолят', 5),
  masculinePast: Word('замусолил', 5),
  femininePast: Word('замусолила', 5),
  neuterPast: Word('замусолило', 5),
  pluralPast: Word('замусолили', 5),
  imperativeInformal: Word('замусоль', 5),
  imperativeFormal: Word('замусольте', 5),
  imperfect: [],
};

perfectVerbs.set(замусолить.name.text, замусолить);

export { замусолить };