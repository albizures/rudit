import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пророчить: PerfectVerb = {
  name: Word('пророчить', 4),
  singular1stPerson: Word('пророчу', 4),
  singular2ndPerson: Word('пророчишь', 4),
  singular3rdPerson: Word('пророчит', 4),
  plural1stPerson: Word('пророчим', 4),
  plural2ndPerson: Word('пророчите', 4),
  plural3rdPerson: Word('пророчат', 4),
  masculinePast: Word('пророчил', 4),
  femininePast: Word('пророчила', 4),
  neuterPast: Word('пророчило', 4),
  pluralPast: Word('пророчили', 4),
  imperativeInformal: Word('пророчь', 4),
  imperativeFormal: Word('пророчьте', 4),
  imperfect: [],
};

perfectVerbs.set(пророчить.name.text, пророчить);

export { пророчить };