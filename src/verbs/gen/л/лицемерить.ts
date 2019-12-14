import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лицемерить: PerfectVerb = {
  name: Word('лицемерить', 5),
  singular1stPerson: Word('лицемерю', 5),
  singular2ndPerson: Word('лицемеришь', 5),
  singular3rdPerson: Word('лицемерит', 5),
  plural1stPerson: Word('лицемерим', 5),
  plural2ndPerson: Word('лицемерите', 5),
  plural3rdPerson: Word('лицемерят', 5),
  masculinePast: Word('лицемерил', 5),
  femininePast: Word('лицемерила', 5),
  neuterPast: Word('лицемерило', 5),
  pluralPast: Word('лицемерили', 5),
  imperativeInformal: Word('лицемерь', 5),
  imperativeFormal: Word('лицемерьте', 5),
  imperfect: [],
};

perfectVerbs.set(лицемерить.name.text, лицемерить);

export { лицемерить };