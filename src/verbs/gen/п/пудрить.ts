import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пудрить: PerfectVerb = {
  name: Word('пудрить', 1),
  singular1stPerson: Word('пудрю', 1),
  singular2ndPerson: Word('пудришь', 1),
  singular3rdPerson: Word('пудрит', 1),
  plural1stPerson: Word('пудрим', 1),
  plural2ndPerson: Word('пудрите', 1),
  plural3rdPerson: Word('пудрят', 1),
  masculinePast: Word('пудрил', 1),
  femininePast: Word('пудрила', 1),
  neuterPast: Word('пудрило', 1),
  pluralPast: Word('пудрили', 1),
  imperativeInformal: Word('пудри', 1),
  imperativeFormal: Word('пудрите', 1),
  imperfect: [],
};

perfectVerbs.set(пудрить.name.text, пудрить);

export { пудрить };