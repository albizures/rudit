import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пришвартовываться: PerfectVerb = {
  name: Word('пришвартовываться', 8),
  singular1stPerson: Word('пришвартовываюсь', 8),
  singular2ndPerson: Word('пришвартовываешься', 8),
  singular3rdPerson: Word('пришвартовывается', 8),
  plural1stPerson: Word('пришвартовываемся', 8),
  plural2ndPerson: Word('пришвартовываетесь', 8),
  plural3rdPerson: Word('пришвартовываются', 8),
  masculinePast: Word('пришвартовывался', 8),
  femininePast: Word('пришвартовывалась', 8),
  neuterPast: Word('пришвартовывалось', 8),
  pluralPast: Word('пришвартовывались', 8),
  imperativeInformal: Word('пришвартовывайся', 8),
  imperativeFormal: Word('пришвартовывайтесь', 8),
  imperfect: [],
};

perfectVerbs.set(пришвартовываться.name.text, пришвартовываться);

export { пришвартовываться };