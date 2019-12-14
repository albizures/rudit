import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перемудрить: PerfectVerb = {
  name: Word('перемудрить', 8),
  singular1stPerson: Word('перемудрю', 8),
  singular2ndPerson: Word('перемудришь', 8),
  singular3rdPerson: Word('перемудрит', 8),
  plural1stPerson: Word('перемудрим', 8),
  plural2ndPerson: Word('перемудрите', 8),
  plural3rdPerson: Word('перемудрят', 8),
  masculinePast: Word('перемудрил', 8),
  femininePast: Word('перемудрила', 8),
  neuterPast: Word('перемудрило', 8),
  pluralPast: Word('перемудрили', 8),
  imperativeInformal: Word('перемудри', 8),
  imperativeFormal: Word('перемудрите', 8),
  imperfect: [],
};

perfectVerbs.set(перемудрить.name.text, перемудрить);

export { перемудрить };