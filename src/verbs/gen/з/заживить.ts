import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заживить: PerfectVerb = {
  name: Word('заживить', 5),
  singular1stPerson: Word('заживлю', 6),
  singular2ndPerson: Word('заживишь', 5),
  singular3rdPerson: Word('заживит', 5),
  plural1stPerson: Word('заживим', 5),
  plural2ndPerson: Word('заживите', 5),
  plural3rdPerson: Word('заживят', 5),
  masculinePast: Word('заживил', 5),
  femininePast: Word('заживила', 5),
  neuterPast: Word('заживило', 5),
  pluralPast: Word('заживили', 5),
  imperativeInformal: Word('заживи', 5),
  imperativeFormal: Word('заживите', 5),
  imperfect: [],
};

perfectVerbs.set(заживить.name.text, заживить);

export { заживить };