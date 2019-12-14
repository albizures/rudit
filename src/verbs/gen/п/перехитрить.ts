import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перехитрить: PerfectVerb = {
  name: Word('перехитрить', 8),
  singular1stPerson: Word('перехитрю', 8),
  singular2ndPerson: Word('перехитришь', 8),
  singular3rdPerson: Word('перехитрит', 8),
  plural1stPerson: Word('перехитрим', 8),
  plural2ndPerson: Word('перехитрите', 8),
  plural3rdPerson: Word('перехитрят', 8),
  masculinePast: Word('перехитрил', 8),
  femininePast: Word('перехитрила', 8),
  neuterPast: Word('перехитрило', 8),
  pluralPast: Word('перехитрили', 8),
  imperativeInformal: Word('перехитри', 8),
  imperativeFormal: Word('перехитрите', 8),
  imperfect: [],
};

perfectVerbs.set(перехитрить.name.text, перехитрить);

export { перехитрить };