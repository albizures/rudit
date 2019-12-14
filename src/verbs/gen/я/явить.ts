import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const явить: PerfectVerb = {
  name: Word('явить', 2),
  singular1stPerson: Word('явлю', 3),
  singular2ndPerson: Word('явишь', 0),
  singular3rdPerson: Word('явит', 0),
  plural1stPerson: Word('явим', 0),
  plural2ndPerson: Word('явите', 0),
  plural3rdPerson: Word('явят', 0),
  masculinePast: Word('явил', 2),
  femininePast: Word('явила', 2),
  neuterPast: Word('явило', 2),
  pluralPast: Word('явили', 2),
  imperativeInformal: Word('яви', 2),
  imperativeFormal: Word('явите', 2),
  imperfect: [],
};

perfectVerbs.set(явить.name.text, явить);

export { явить };