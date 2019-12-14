import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рассредоточиваться: PerfectVerb = {
  name: Word('рассредоточиваться', 9),
  singular1stPerson: Word('рассредоточиваюсь', 9),
  singular2ndPerson: Word('рассредоточиваешься', 9),
  singular3rdPerson: Word('рассредоточивается', 9),
  plural1stPerson: Word('рассредоточиваемся', 9),
  plural2ndPerson: Word('рассредоточиваетесь', 9),
  plural3rdPerson: Word('рассредоточиваются', 9),
  masculinePast: Word('рассредоточивался', 9),
  femininePast: Word('рассредоточивалась', 9),
  neuterPast: Word('рассредоточивалось', 9),
  pluralPast: Word('рассредоточивались', 9),
  imperativeInformal: Word('рассредоточивайся', 9),
  imperativeFormal: Word('рассредоточивайтесь', 9),
  imperfect: [],
};

perfectVerbs.set(рассредоточиваться.name.text, рассредоточиваться);

export { рассредоточиваться };