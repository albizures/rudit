import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сбрендить: PerfectVerb = {
  name: Word('сбрендить', 3),
  singular1stPerson: Word('-', -1),
  singular2ndPerson: Word('сбрендишь', 3),
  singular3rdPerson: Word('сбрендит', 3),
  plural1stPerson: Word('сбрендим', 3),
  plural2ndPerson: Word('сбрендите', 3),
  plural3rdPerson: Word('сбрендят', 3),
  masculinePast: Word('сбрендил', 3),
  femininePast: Word('сбрендила', 3),
  neuterPast: Word('сбрендило', 3),
  pluralPast: Word('сбрендили', 3),
  imperativeInformal: Word('сбренди', 3),
  imperativeFormal: Word('сбрендите', 3),
  imperfect: [],
};

perfectVerbs.set(сбрендить.name.text, сбрендить);

export { сбрендить };