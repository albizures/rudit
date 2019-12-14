import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наживить: PerfectVerb = {
  name: Word('наживить', 5),
  singular1stPerson: Word('наживлю', 6),
  singular2ndPerson: Word('наживишь', 5),
  singular3rdPerson: Word('наживит', 5),
  plural1stPerson: Word('наживим', 5),
  plural2ndPerson: Word('наживите', 5),
  plural3rdPerson: Word('наживят', 5),
  masculinePast: Word('наживил', 5),
  femininePast: Word('наживила', 5),
  neuterPast: Word('наживило', 5),
  pluralPast: Word('наживили', 5),
  imperativeInformal: Word('наживи', 5),
  imperativeFormal: Word('наживите', 5),
  imperfect: [],
};

perfectVerbs.set(наживить.name.text, наживить);

export { наживить };