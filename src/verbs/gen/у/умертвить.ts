import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const умертвить: PerfectVerb = {
  name: Word('умертвить', 6),
  singular1stPerson: Word('умерщвлю', 7),
  singular2ndPerson: Word('умертвишь', 6),
  singular3rdPerson: Word('умертвит', 6),
  plural1stPerson: Word('умертвим', 6),
  plural2ndPerson: Word('умертвите', 6),
  plural3rdPerson: Word('умертвят', 6),
  masculinePast: Word('умертвил', 6),
  femininePast: Word('умертвила', 6),
  neuterPast: Word('умертвило', 6),
  pluralPast: Word('умертвили', 6),
  imperativeInformal: Word('умертви', 6),
  imperativeFormal: Word('умертвите', 6),
  imperfect: [],
};

perfectVerbs.set(умертвить.name.text, умертвить);

export { умертвить };