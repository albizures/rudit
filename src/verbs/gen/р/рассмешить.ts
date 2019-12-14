import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рассмешить: PerfectVerb = {
  name: Word('рассмешить', 7),
  singular1stPerson: Word('рассмешу', 7),
  singular2ndPerson: Word('рассмешишь', 7),
  singular3rdPerson: Word('рассмешит', 7),
  plural1stPerson: Word('рассмешим', 7),
  plural2ndPerson: Word('рассмешите', 7),
  plural3rdPerson: Word('рассмешат', 7),
  masculinePast: Word('рассмешил', 7),
  femininePast: Word('рассмешила', 7),
  neuterPast: Word('рассмешило', 7),
  pluralPast: Word('рассмешили', 7),
  imperativeInformal: Word('рассмеши', 7),
  imperativeFormal: Word('рассмешите', 7),
  imperfect: [],
};

perfectVerbs.set(рассмешить.name.text, рассмешить);

export { рассмешить };