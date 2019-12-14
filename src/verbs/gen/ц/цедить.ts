import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const цедить: PerfectVerb = {
  name: Word('цедить', 3),
  singular1stPerson: Word('цежу', 3),
  singular2ndPerson: Word('цедишь', 1),
  singular3rdPerson: Word('цедит', 1),
  plural1stPerson: Word('цедим', 1),
  plural2ndPerson: Word('цедите', 1),
  plural3rdPerson: Word('цедят', 1),
  masculinePast: Word('цедил', 3),
  femininePast: Word('цедила', 3),
  neuterPast: Word('цедило', 3),
  pluralPast: Word('цедили', 3),
  imperativeInformal: Word('цеди', 3),
  imperativeFormal: Word('цедите', 3),
  imperfect: [],
};

perfectVerbs.set(цедить.name.text, цедить);

export { цедить };