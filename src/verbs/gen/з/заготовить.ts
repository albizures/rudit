import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заготовить: PerfectVerb = {
  name: Word('заготовить', 5),
  singular1stPerson: Word('заготовлю', 5),
  singular2ndPerson: Word('заготовишь', 5),
  singular3rdPerson: Word('заготовит', 5),
  plural1stPerson: Word('заготовим', 5),
  plural2ndPerson: Word('заготовите', 5),
  plural3rdPerson: Word('заготовят', 5),
  masculinePast: Word('заготовил', 5),
  femininePast: Word('заготовила', 5),
  neuterPast: Word('заготовило', 5),
  pluralPast: Word('заготовили', 5),
  imperativeInformal: Word('заготовь', 5),
  imperativeFormal: Word('заготовьте', 5),
  imperfect: ['заготовлять','заготавливать'],
};

perfectVerbs.set(заготовить.name.text, заготовить);

export { заготовить };