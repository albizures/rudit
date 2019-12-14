import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сосредоточиваться: PerfectVerb = {
  name: Word('сосредоточиваться', 8),
  singular1stPerson: Word('сосредоточиваюсь', 8),
  singular2ndPerson: Word('сосредоточиваешься', 8),
  singular3rdPerson: Word('сосредоточивается', 8),
  plural1stPerson: Word('сосредоточиваемся', 8),
  plural2ndPerson: Word('сосредоточиваетесь', 8),
  plural3rdPerson: Word('сосредоточиваются', 8),
  masculinePast: Word('сосредоточивался', 8),
  femininePast: Word('сосредоточивалась', 8),
  neuterPast: Word('сосредоточивалось', 8),
  pluralPast: Word('сосредоточивались', 8),
  imperativeInformal: Word('сосредоточивайся', 8),
  imperativeFormal: Word('сосредоточивайтесь', 8),
  imperfect: [],
};

perfectVerbs.set(сосредоточиваться.name.text, сосредоточиваться);

export { сосредоточиваться };