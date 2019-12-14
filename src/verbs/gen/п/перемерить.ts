import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перемерить: PerfectVerb = {
  name: Word('перемерить', 5),
  singular1stPerson: Word('перемерю', 5),
  singular2ndPerson: Word('перемеришь', 5),
  singular3rdPerson: Word('перемерит', 5),
  plural1stPerson: Word('перемерим', 5),
  plural2ndPerson: Word('перемерите', 5),
  plural3rdPerson: Word('перемерят', 5),
  masculinePast: Word('перемерил', 5),
  femininePast: Word('перемерила', 5),
  neuterPast: Word('перемерило', 5),
  pluralPast: Word('перемерили', 5),
  imperativeInformal: Word('перемерь', 5),
  imperativeFormal: Word('перемерьте', 5),
  imperfect: [],
};

perfectVerbs.set(перемерить.name.text, перемерить);

export { перемерить };