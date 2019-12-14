import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дрейфить: PerfectVerb = {
  name: Word('дрейфить', 2),
  singular1stPerson: Word('дрейфлю', 2),
  singular2ndPerson: Word('дрейфишь', 2),
  singular3rdPerson: Word('дрейфит', 2),
  plural1stPerson: Word('дрейфим', 2),
  plural2ndPerson: Word('дрейфите', 2),
  plural3rdPerson: Word('дрейфят', 2),
  masculinePast: Word('дрейфил', 2),
  femininePast: Word('дрейфила', 2),
  neuterPast: Word('дрейфило', 2),
  pluralPast: Word('дрейфили', 2),
  imperativeInformal: Word('дрейфь', 2),
  imperativeFormal: Word('дрейфьте', 2),
  imperfect: ['сдрейфить'],
};

perfectVerbs.set(дрейфить.name.text, дрейфить);

export { дрейфить };