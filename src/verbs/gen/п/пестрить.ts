import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пестрить: PerfectVerb = {
  name: Word('пестрить', 5),
  singular1stPerson: Word('пестрю', 5),
  singular2ndPerson: Word('пестришь', 5),
  singular3rdPerson: Word('пестрит', 5),
  plural1stPerson: Word('пестрим', 5),
  plural2ndPerson: Word('пестрите', 5),
  plural3rdPerson: Word('пестрят', 5),
  masculinePast: Word('пестрил', 5),
  femininePast: Word('пестрила', 5),
  neuterPast: Word('пестрило', 5),
  pluralPast: Word('пестрили', 5),
  imperativeInformal: Word('пестри', 5),
  imperativeFormal: Word('пестрите', 5),
  imperfect: [],
};

perfectVerbs.set(пестрить.name.text, пестрить);

export { пестрить };