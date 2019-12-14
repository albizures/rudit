import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const притрагиваться: PerfectVerb = {
  name: Word('притрагиваться', 5),
  singular1stPerson: Word('притрагиваюсь', 5),
  singular2ndPerson: Word('притрагиваешься', 5),
  singular3rdPerson: Word('притрагивается', 5),
  plural1stPerson: Word('притрагиваемся', 5),
  plural2ndPerson: Word('притрагиваетесь', 5),
  plural3rdPerson: Word('притрагиваются', 5),
  masculinePast: Word('притрагивался', 5),
  femininePast: Word('притрагивалась', 5),
  neuterPast: Word('притрагивалось', 5),
  pluralPast: Word('притрагивались', 5),
  imperativeInformal: Word('притрагивайся', 5),
  imperativeFormal: Word('притрагивайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(притрагиваться.name.text, притрагиваться);

export { притрагиваться };