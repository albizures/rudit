import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пересадить: PerfectVerb = {
  name: Word('пересадить', 7),
  singular1stPerson: Word('пересажу', 7),
  singular2ndPerson: Word('пересадишь', 5),
  singular3rdPerson: Word('пересадит', 5),
  plural1stPerson: Word('пересадим', 5),
  plural2ndPerson: Word('пересадите', 5),
  plural3rdPerson: Word('пересадят', 5),
  masculinePast: Word('пересадил', 7),
  femininePast: Word('пересадила', 7),
  neuterPast: Word('пересадило', 7),
  pluralPast: Word('пересадили', 7),
  imperativeInformal: Word('пересади', 7),
  imperativeFormal: Word('пересадите', 7),
  imperfect: [],
};

perfectVerbs.set(пересадить.name.text, пересадить);

export { пересадить };