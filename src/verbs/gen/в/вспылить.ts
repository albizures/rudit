import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вспылить: PerfectVerb = {
  name: Word('вспылить', 5),
  singular1stPerson: Word('вспылю', 5),
  singular2ndPerson: Word('вспылишь', 5),
  singular3rdPerson: Word('вспылит', 5),
  plural1stPerson: Word('вспылим', 5),
  plural2ndPerson: Word('вспылите', 5),
  plural3rdPerson: Word('вспылят', 5),
  masculinePast: Word('вспылил', 5),
  femininePast: Word('вспылила', 5),
  neuterPast: Word('вспылило', 5),
  pluralPast: Word('вспылили', 5),
  imperativeInformal: Word('вспыли', 5),
  imperativeFormal: Word('вспылите', 5),
  imperfect: [],
};

perfectVerbs.set(вспылить.name.text, вспылить);

export { вспылить };