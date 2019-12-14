import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const предубедить: PerfectVerb = {
  name: Word('предубедить', 8),
  singular1stPerson: Word('предубежу', 8),
  singular2ndPerson: Word('предубедишь', 8),
  singular3rdPerson: Word('предубедит', 8),
  plural1stPerson: Word('предубедим', 8),
  plural2ndPerson: Word('предубедите', 8),
  plural3rdPerson: Word('предубедят', 8),
  masculinePast: Word('предубедил', 8),
  femininePast: Word('предубедила', 8),
  neuterPast: Word('предубедило', 8),
  pluralPast: Word('предубедили', 8),
  imperativeInformal: Word('предубеди', 8),
  imperativeFormal: Word('предубедите', 8),
  imperfect: [],
};

perfectVerbs.set(предубедить.name.text, предубедить);

export { предубедить };